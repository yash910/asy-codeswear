// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

  let pincodes = {
    " 242221":["Gurugram","Haryana"],
     " 11003":["Delhi","Delhi"],
     " 560017":["Bangalore","Karnataka"]
  }
    res.status(200).json([242221,11003,560017,721302])
  }
  