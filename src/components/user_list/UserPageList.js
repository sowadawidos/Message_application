import React, {useState, useEffect} from "react";
import "./UserPageList.scss";
import logo from "../../images/search.svg";

export const UserPageList = ({user , messageDB}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (messageDB) {
            messageDB.collection('users').onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setUsers(data);
            })
        }
    }, [messageDB]);
    console.log(users);

    return (
        <>
            <div className="user__page-list">
                <div className="users__list">
                    <h1>Users</h1>
                    <ul>
                        <li className="user-search"><a href=""><img src={logo}/></a></li>
                        {
                            users.map(user => {
                                return (
                                    <>
                                        <li className="user-logo">
                                            <a href=""><img src={user.photo}/></a>
                                        </li>
                                    </>
                                )
                            })
                        }

                    </ul>
                </div>
                <ul className="user-list">
                    <h1 className="user-list-title">Messages</h1>
                    <li>
                        <a href="" className="users">
                            <img src="man_photo1.jpeg"/>
                            <div className="user-description">
                                <h1 className="user-desc-unread">Dawid Sowiński</h1>
                                <p>wiadomość cos tam</p>
                            </div>
                            <div className="user-date">
                                <p>12:00</p>
                                <p>today</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}