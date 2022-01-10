import React, {Component} from 'react';
import {Table, Button} from 'antd';

/**
 * antd 可展开表格
 */
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [
                {
                    index: 1,
                    name: 'JavaScript',
                    status: 1,
                    children: [
                        {
                            index: 1,
                            name: 'Node.js',
                            status: 1,
                            children: [
                                {
                                    index: 1,
                                    name: 'Express',
                                    status: 1
                                },
                                {
                                    index: 2,
                                    name: 'Egg.js',
                                    status: 1,
                                    children: [
                                        {
                                            index: 1,
                                            name: 'Express',
                                            status: 1
                                        },
                                        {
                                            index: 2,
                                            name: 'Egg.js',
                                            status: 1,
                                            children: [
                                                {
                                                    index: 1,
                                                    name: 'Express',
                                                    status: 1
                                                },
                                                {
                                                    index: 2,
                                                    name: 'Egg.js',
                                                    status: 1
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            index: 2,
                            name: 'React',
                            status: 1
                        },
                        {
                            index: 3,
                            name: 'Angular',
                            status: 2
                        }
                    ]
                },
                {
                    index: 2,
                    name: 'Python',
                    status: 2,
                    children: [
                        {
                            index: 1,
                            name: 'Django',
                            status: 1
                        },
                        {
                            index: 2,
                            name: 'flask',
                            status: 2
                        }
                    ]
                },
                {
                    index: 3,
                    name: 'Golang',
                    status: 1
                }
            ],
            columns: [
                {
                    title: '序号',
                    dataIndex: 'index'
                },
                {
                    title: '名称',
                    dataIndex: 'name'
                },
                {
                    title: '状态',
                    dataIndex: 'status',
                    render: text => <span>{text === 1 ? '通过' : '未通过'}</span>
                },
                {
                    title: '操作',
                    dataIndex: 'name',
                    render: (text, record) => <Button
                        type={'link'}
                        onClick={() => this.setState({isSelected: text})}
                    >选择</Button>
                }
            ],
            isSelected: null
        };
    }

    render() {
        return (
            <div>
                <Table
                    columns={this.state.columns}
                    dataSource={this.state.tableData}
                    rowKey={'index'}
                />
                已选：{this.state.isSelected ? this.state.isSelected : '-'}
            </div>
        );
    }
}

export default Index;