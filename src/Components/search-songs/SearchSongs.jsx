import React from 'react'
import { LuArrowUpDown } from "react-icons/lu";
import { SearchOutlined } from '@ant-design/icons';
import { Dropdown, Input, Space } from 'antd'
import styles from './SearchSongs.module.css'

const items = [
  {
    key: '1',
    label: '...',
  }
];

const SearchSongs = ({setSearchTrack}) => {
  return (
    <div className={styles.searchSongs}>
      <Dropdown.Button
      onClick={() => console.log('Track Number')}
        menu={{
          items,
        }}
      >
        <LuArrowUpDown />
        Track Number
      </Dropdown.Button>
      <Space.Compact size="large">
        <Input 
        addonBefore={<SearchOutlined />} 
        placeholder="Search by song name..." 
        onChange={(e) => setSearchTrack(e.target.value)} 
        className={styles.input}/>
      </Space.Compact>
    </div>
  )
}

export default SearchSongs