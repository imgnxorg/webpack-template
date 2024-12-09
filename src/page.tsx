"use client";

import React from "react";

const Page = ({ children }: { children: any }) => {
    return (
        <React.Fragment>
            {/* Silence is golden */}
            {children}
            {/* Duct tape is silver */}
        </React.Fragment>
    );
};

export default Page;
