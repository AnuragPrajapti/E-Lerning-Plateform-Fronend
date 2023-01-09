import { Link } from "react-router-dom";
import "./sidebar.scss";

const SidebarMenu = (props: any) => {
  const { adminMenu } = props;
  return (
    <div className="SidebarMenu">
      <Link to="#" className="link"></Link>
      {adminMenu?.map((item: any, index: number) => {
        return (
          <li className="menuItems" key={index}>
            <Link to={item.path}>
            <span className="spanTitle">{item?.icon}</span>
              <span className="spanTitle">{item?.title}</span>
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default SidebarMenu;
