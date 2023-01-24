// module.exports = (phase, { defaultConfig }) => {
//   const rewrites = () => {
//     return [
//       {
//         source: "/moc/:path*",
//         destination: `${process.env.NEXT_PUBLIC_MOCEAN_BASE_URL}/moc/:path*`,
//       },
//     ];
//   };

//   return { rewrites };
// };

module.exports = {
  images: {
    domains: ["helpx.adobe.com", "ewr1.vultrobjects.com"],
  },
};
