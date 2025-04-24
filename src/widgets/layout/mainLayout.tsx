import {ReactNode} from "react";
import Layout from "@/widgets/layout/layout";
import Profile from "@/widgets/home/Profile";
import * as React from "react";

export default function MainLayout({ children } : { children : ReactNode }) {
  return (
    <Layout>
      <div className="w-full max-w-[1200px] mx-auto h-[200px] flex items-center p-4">
        <Profile/>
      </div>
      {children}
    </Layout>
  )
}