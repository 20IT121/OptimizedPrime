import React from 'react';
import './sidebar.css';
import linearRecord from '../Data/LinearData.json';
import nonLinearRecord from '../Data/NonLinearData.json';
import algorithmRecord from '../Data/AlgorithmData.json';
import librariRecord from '../Data/LibrariesData.json';
import SidebarItem from './SidebarItem';

export default function Sidebar(props) {

    if (props.link === "dataStructure") {
        return (
            <div className="sidebar">
                <div className="data">

                    <div className="linear">
                        <p className="title text-center">LINEAR DATA STRUCTURE</p>
                        <hr />
                        <div className="menu">
                            {
                                linearRecord.map((item, index) => {
                                    return (
                                        <SidebarItem key={index} item={item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="non-linear">
                    <p className="non title text-center">NON-LINEAR DATA STRUCTURE</p>
                    <hr />
                    <div className="menu">
                        {
                            nonLinearRecord.map((item, index) => {
                                return (
                                    <SidebarItem key={index} item={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    else if (props.link === "algorithm") {
        return (
            <div className="sidebar">
                <div className="data">

                    <div className="parent-menu">
                        <p className="title text-center">ALGORITHMS</p>
                        <hr />
                        <div className="menu">
                            {
                                algorithmRecord.map((item, index) => {
                                    return (
                                        <SidebarItem key={index} item={item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if (props.link === "libraries") {
        return (
            <div className="sidebar">
                <div className="data">

                    <div className="parent-menu">
                        <p className="title text-center">LIBRARIES</p>
                        <hr />
                        <div className="menu">
                            {
                                librariRecord.map((item, index) => {
                                    return (
                                        <SidebarItem key={index} item={item} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}