import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolorum laudantium animi voluptates rem dignissimos adipisci facilis illum. Minima voluptate possimus, ipsam minus voluptatum vel quia repellat nisi quibusdam laboriosam aut, distinctio omnis exercitationem incidunt. Fugiat, quaerat, dignissimos provident consequuntur dicta aut, recusandae earum amet magni impedit voluptate nam eum eligendi voluptatibus velit quas laborum illo fugit optio modi minus autem. Iure dolorem sed repellendus velit. Soluta libero, itaque ipsam deleniti quae, inventore debitis, maxime hic ad consequuntur pariatur assumenda.</p>
            <Outlet />
        </>
    )
};

export default About;