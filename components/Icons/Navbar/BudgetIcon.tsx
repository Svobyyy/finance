export default function BudgetIcon({
  title,
  active,
}: {
  title: string;
  active: string;
}) {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m.32038 8.59187c.221475-1.85713.98107-3.60899 2.18531-5.04.13325-.16068.29856-.29177.48537-.38491.18681-.09313.391-.14625.59951-.15595.20851-.00971.41675.02421.61141.09958.19465.07538.37143.19055.51902.33816l2.59407 2.64937c.24982.24925.40292.57919.43194.93089.02902.35171-.06792.70228-.27351.98911-.15572.22092-.273.46656-.34687.72656-.02347.07671-.07091.14388-.13537.19164-.06446.04775-.14253.07357-.22276.07368h-6.074995c-.052937.00008-.105292-.01104-.153622-.03264s-.091539-.05319-.126785-.09268c-.035246-.0395-.06173-.08601-.077711-.13648s-.021095-.10374-.015007-.15633zm10.56002-8.57625c-.2072-.01806747-.4159.0071461-.6128.0740394-.1969.0668936-.37778.1740046-.53109.3145316-.15331.140528-.27573.3114-.35947.501766-.08374.190363-.12698.396063-.12697.604033v3.81282c-.00259.35379.12106.69691.34874.96772.22768.27082.54449.45156.89349.50978.6571.10841 1.2595.43241 1.7121.92093.4527.48852.73 1.11379.7881 1.77727.0581.66349-.1062 1.32739-.4671 1.88719-.3608.5598-.8977.9836-1.526 1.2046-.0731.0269-.1362.0755-.1808.1394s-.0685.1399-.0685.2178v6.1153c-.0004.0531.0105.1057.032.1542.0215.0486.0531.092.0926.1275.0395.0354.0861.0621.1367.0782s.104.0212.1568.0151c2.3399-.2889 4.4967-1.4131 6.0735-3.1658s2.4676-4.016 2.5084-6.37326c.0703-5.08968-3.826-9.431245-8.8697-9.88312zm-1.88815 12.57188c-.41923-.1495-.79993-.3905-1.1145-.7054-.31458-.3149-.55514-.6958-.70425-1.1152-.02556-.0744-.07354-.139-.13733-.185-.0638-.046-.14027-.0711-.21892-.0719h-6.124683c-.053006-.0003-.105481.0106-.153964.032s-.091873.0529-.127308.0923c-.035436.0394-.062111.0859-.078267.1364s-.021425.1038-.015461.1565c.262606 2.1669 1.244093 4.1833 2.787573 5.7268s3.55984 2.525 5.7268 2.7876c.05267.0059.10601.0007.15649-.0155.05049-.0162.09697-.0428.1364-.0783.03942-.0354.07088-.0788.0923-.1273.02143-.0485.03233-.1009.032-.1539v-6.1191c.00015-.0793-.02454-.1567-.07061-.2213-.04608-.0645-.11121-.113-.18627-.1387z"
        className={`${
          active === title.toLowerCase() ? "fill-green" : "fill-current"
        }`}
      />
    </svg>
  );
}
