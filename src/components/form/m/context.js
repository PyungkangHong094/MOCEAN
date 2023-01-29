import React, { useContext, useState, useEffect } from 'react';

const initData = {
    posture: {
        index: 0
    },
    mobility_and_balance_cervical: {
        customer_id: 0,
        cervical_extension: 0,
        cervical_flexion: 0,
        cervical_rotation: 0,
        cervical_side_bending: 0,
        assessment_maximum: 8,
        assessment_score: 0,
        patient_score: 0
    },
    mobility_and_balance_spine: {
        customer_id: 0,
        forward_head_posture: 0,
        flat_back: 0,
        scapular_winging: 0,
        toe_touch: 0,
        assessment_maximum: 8,
        assessment_score: 0,
        patient_score: 0
    },
    mobility_and_balance_upper_extremity: {
        customer_id: 0,
        flexion_left: 0,
        flexion_right: 0,
        internal_rotation_left: 0,
        internal_rotation_right: 0,
        external_rotationipsum_left: 0,
        external_rotationipsum_right: 0,
        horizontal_abduction_left: 0,
        horizontal_abduction_right: 0,
        atypical_expansion: 'none',
        infrasternal_angle: 'wide',
        pattern: 'rdp',
        assessment_maximum: 8,
        assessment_score_left: 0,
        assessment_score_right: 0,
        patient_score_left: 0,
        patient_score_right: 0
    },
    mobility_and_balance_lower_extremity: {
        pelvic_torsion: 'none',
        single_leg_raise_left: 0,
        single_leg_raise_right: 0,
        adduction_drop_test_left: 0,
        adduction_drop_test_right: 0,
        hip_ir_left: 0,
        hip_ir_right: 0,
        thomas_test_left: 0,
        thomas_test_right: 0,
        first_mtp_flexion_left: 0,
        first_mtp_flexion_right: 0,
        left_feet: 'supination',
        right_feet: 'supination',
        pattern: 'rdp',
        assessment_maximum: 10,
        assessment_score_left: 0,
        assessment_score_right: 0,
        patient_score_left: 0,
        patient_score_right: 0
    },
    movement: {
        hip_shift_in_squat: 0,
        can_squat_below_ninety_degrees: 0,
        feet_pronates_during_squat: 0,
        can_hinge_hip_without_over_extension: 0,
        deadlift_upper_back_rounding: 0,
        finger_touch_ground: 0,
        hip_shift_during_toe_touch: 0,
        toe_touch_upper_back_rounding: 0,
        flexion_left: 0,
        flexion_right: 0,
        lateral_flexion_left: 0,
        lateral_flexion_right: 0,
        assessment_maximum: 12,
        assessment_score: 0,
        patient_score: 0
    },
    cardio_respiratory_strength: {
        age: 0,
        gender: 'male',
        seconds_on_bruce_protocol: 0,
        maximum_hr: 0
    },
    musculo_skeletal_health: {
        gender: 'male',
        pushup_test: 0,
        squat_test: 0,
        plank_test: 0,
        pushup_score: 0,
        squat_score: 0,
        plank_score: 0,
        lower_extremity_assessment: 'rdp',
        upper_extremity_assessment: 'rdp',
        condition: 'danger'
    }
};

const MContext = React.createContext({
    data: initData,
    initData: (data) => {},
    setData: ({ section, key, value }) => {}
});

export const useMContext = () => useContext(MContext);

export const MProvider = ({ children }) => {
    const [data, setData] = useState(initData);

    const initMData = (mData) => {
        let newData = { ...data };
        const keys = Object.keys(initData);

        for (const key of keys) {
            if (mData && mData[key]) {
                newData[key] = mData[key];
            }
            else {
                newData[key] = initData[key];
            }
        }

        setData(newData);
    }

    const setPair = (section, key, value) => {
        // console.log(section, key, value);
        let newData = { ...data };
        if (!newData[section]) {
            newData[section] = initData[section];
        }
        newData[section][key] = value;
        
        setData(newData);
    };

    return (
        <MContext.Provider
            value={{
                data,
                initData: initMData,
                setData: setPair
            }}
        >
            {children}
        </MContext.Provider>
    );
};