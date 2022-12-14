import {useEffect, useState} from "react";
import {Table} from "antd";

function DefaultTable(props) {
    const {
        columns,
        request,
        tableOptions = {},
    } = props;
    const [tableDataSource, setTableDataSource] = useState([]);
    const [tableLoading, setTableLoading] = useState(false);
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    const handleChangePageOptions = (page, pageSize) => {
        setPage(page);
        setPageSize(pageSize);
    }

    const handleSearchList = () => {
        const params = {
            pageSize,
            page
        };
        setTableLoading(true);
        request(params).then(res => {
            setTableDataSource(res.data.data.list || []);
            setTotal(res.data.data.total || 0);
        }).finally(() => {
            setTableLoading(false)
        });
    }

    useEffect(() => {
        handleSearchList()
        // eslint-disable-next-line
    }, [page])

    useEffect(() => {
        handleSearchList()
        // eslint-disable-next-line
    }, [pageSize])

    return (
        <Table
            loading={tableLoading}
            dataSource={tableDataSource}
            columns={columns}
            rowKey={record => record.Id}
            scroll={{x: '100%'}}
            pagination={{
                current: page,
                pageSize: pageSize,
                total: total,
                onChange: (pageNum, pageSize) => handleChangePageOptions(pageNum, pageSize)
            }}
            {  ...tableOptions }
        >

        </Table>
    )
}


export default DefaultTable;
