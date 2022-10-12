import React from "react";

export default function Header(props) {
    return (
        <header className="bg-blue-900 p-5">
            <nav>
                <ul className="flex flex-row">
                    <li className="mx-3 text-yellow-500">
                        <a href="#">Home</a>
                    </li>
                    <li className="mx-3 text-yellow-500">
                        <a href="#">Project</a>
                    </li>
                    <li className="ml-auto text-white">
                        {props?.name ? props.name : 'From Homepage'}
                    </li>
                </ul>
            </nav>
        </header>
    )
}
