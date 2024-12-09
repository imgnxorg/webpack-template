import React from "react";

export {};

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ImgNxPress: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}

type Props = {
    children: React.ReactNode;
};

export const Press: React.FC<Props> = ({ children }) => {
    return <>{children}</>;
};
