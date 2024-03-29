import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Avatar,
  Button,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
// import { customers } from '../__mocks__/customers';
import { CustomerListItem } from "./customer-list-item";
import { customersMoc } from "src/__mocks__/customers";
import { deleteUser, getAllUsers } from "src/data/repository/users";
import { useMutation, useQuery, useQueryClient } from "react-query";
import LoadingBar from "../loading-bar";
import { CustomerListToolbar } from "./customer-list-toolbar";

export const CustomerList = (props) => {
  const queryClient = useQueryClient();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [filter, setFilter] = useState("");

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["customers", page, limit, filter],
    queryFn: () => getAllUsers(page, limit, filter),
    keepPreviousData: true,
  });
  const customerList = data?.items;

  const { mutate: removeCustomer } = useMutation(deleteUser, {
    onSettled: () => {
      queryClient.invalidateQueries("customers");
    },
  });

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customerList.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <CustomerListToolbar onSearch={setFilter} />
      {isFetching || isLoading || (!isLoading && !customerList) ? (
        <LoadingBar />
      ) : (
        <Card>
          <PerfectScrollbar>
            <Box sx={{ minWidth: 1050 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedCustomerIds.length === customerList.length}
                        color="primary"
                        indeterminate={
                          selectedCustomerIds.length > 0 &&
                          selectedCustomerIds.length < customerList.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>BirthDay</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customerList.slice(0, limit).map((customer) => (
                    <CustomerListItem
                      key={customer.id}
                      customer={customer}
                      selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onSelect={handleSelectOne}
                      onRemove={() => removeCustomer(customer.id)}
                    />
                  ))}
                </TableBody>
              </Table>
            </Box>
          </PerfectScrollbar>
          <TablePagination
            component="div"
            count={customerList.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page - 1}
            rowsPerPage={limit}
            rowsPerPageOptions={[50, 100, 250]}
          />
        </Card>
      )}
    </>
  );
};

CustomerList.propTypes = {};
