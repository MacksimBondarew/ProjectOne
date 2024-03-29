import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Message() {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
        >
            <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 8.5C-0.00344086 9.81987 0.304932 11.1219 0.9 12.3C2.33904 15.1793 5.28109 16.9988 8.5 17C9.81987 17.0034 11.1219 16.6951 12.3 16.1L18 18L16.1 12.3C16.6951 11.1219 17.0034 9.81987 17 8.5C16.9988 5.28109 15.1793 2.33904 12.3 0.899998C11.1219 0.304929 9.81987 -0.00344328 8.5 -2.02948e-06H8C3.68419 0.238098 0.2381 3.68419 0 8V8.5Z"
                fill="#FF6C00"
            />
        </Svg>
    );
}
