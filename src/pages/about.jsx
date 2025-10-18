import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { decrement, increment } from "../common/counter.js";
import { fetchUsers } from "../common/fetchApi.js";

function About() {
    const count = useSelector((state) => state.counterName.value);
    const users = useSelector((state) => state.userName.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <>
            <p>About</p>
            <Link to="/phone">phone</Link>
            <Outlet />

            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <p>{count}</p>
            </div>

            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.id}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default About;
