import { MenuProps, Dropdown, Space, Button} from 'antd';
import { Filter } from "./style";
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const handleMenuClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

function SortBy() {

  return (
    <Filter>
      <span>Filter</span>
      <div className="sort">
        <span>Sort By:</span>
        <Dropdown menu={menuProps}>
          <Button style={{ width: '300px'}}>
            <Space>
              Button
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </Filter>
  )
}

export default SortBy
