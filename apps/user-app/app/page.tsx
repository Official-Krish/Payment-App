
"use client";

import { useBalance } from "@repo/store/useBalance";

export default function Page(): JSX.Element {
  // return (
  //   <div className="text-4xl">
  //     hey there
  //   </div>
  // );
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}
