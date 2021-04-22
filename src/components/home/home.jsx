import React, { useState } from 'react';

// import { Layout, Menu, Breadcrumb, Input, Row, Col, Button } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;
// const { Header, Content, Sider, Footer } = Layout;
// const { Search } = Input;

import { Layout, Menu, Breadcrumb, Input, Row, Col, Image, Button, Card, Avatar, Modal } from 'antd';
import {
    SearchOutlined, LinkedinFilled, QqOutlined, BellFilled, HomeFilled,
    CaretDownOutlined, UserOutlined, EditOutlined, EllipsisOutlined, SettingOutlined,
    ExclamationCircleOutlined, LikeOutlined, CommentOutlined, GiftOutlined, GiftFilled, YoutubeFilled, InstagramFilled, PlusOutlined
} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;
const { confirm } = Modal;
function Home() {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };
  
    return (
        // <div>
        //     <Layout>
        //         <Header className="header" style={{ backgroundColor: "red" }}>
        //             <Row>
        //                 <h1 style={{ color: "white" }}>ANDPAD</h1>
        //                 <Search placeholder="input search text" style={{ width: 200, marginTop: "1.25%", marginLeft: "1%" }} />

        //             </Row>

        //         </Header>
        //         <Layout>
        //             <Sider width={200} className="site-layout-background">
        //                 <Menu
        //                     theme="dark"
        //                     mode="inline"
        //                     defaultSelectedKeys={['1']}
        //                     defaultOpenKeys={['sub1']}
        //                     style={{ height: '100%', borderRight: 0 }}
        //                 >
        //                     <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
        //                         <Menu.Item key="1">option1</Menu.Item>
        //                         <Menu.Item key="2">option2</Menu.Item>
        //                         <Menu.Item key="3">option3</Menu.Item>
        //                         <Menu.Item key="4">option4</Menu.Item>
        //                     </SubMenu>
        //                     <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
        //                         <Menu.Item key="5">option5</Menu.Item>
        //                         <Menu.Item key="6">option6</Menu.Item>
        //                         <Menu.Item key="7">option7</Menu.Item>
        //                         <Menu.Item key="8">option8</Menu.Item>
        //                     </SubMenu>
        //                     <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
        //                         <Menu.Item key="9">option9</Menu.Item>
        //                         <Menu.Item key="10">option10</Menu.Item>
        //                         <Menu.Item key="11">option11</Menu.Item>
        //                         <Menu.Item key="12">option12</Menu.Item>
        //                     </SubMenu>
        //                 </Menu>
        //             </Sider>
        //             <Layout style={{ padding: '0 24px 24px' }}>
        //                 <Breadcrumb style={{ margin: '16px 0' }}>
        //                     <Breadcrumb.Item>Home</Breadcrumb.Item>
        //                     <Breadcrumb.Item>List</Breadcrumb.Item>
        //                     <Breadcrumb.Item>App</Breadcrumb.Item>
        //                 </Breadcrumb>
        //                 <Content
        //                     className="site-layout-background"
        //                     style={{
        //                         padding: 24,
        //                         margin: 0,
        //                         minHeight: 280,
        //                     }}
        //                 >
        //                     Content
        // </Content>
        //                 <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        //             </Layout>
        //         </Layout>
        //     </Layout>
        // </div>
        <Layout>
            <Header style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "white" }}>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <LinkedinFilled style={{ fontSize: "40px", marginLeft: "0" }} />
                    <Input size="large" style={{ marginLeft: "15px", width: "100%", borderRadius: "10px" }} placeholder="Search" prefix={<SearchOutlined />} />
                </div>





                <Menu style={{ alignSelf: "flex-end" }} theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><HomeFilled style={{ fontSize: "20px" }} />Home</Menu.Item>
                    <Menu.Item key="5"><BellFilled style={{ fontSize: "20px" }} />Notification</Menu.Item>

                    <img src="" />
                    <SubMenu icon={<Image preview={false} style={{ borderRadius: "50px", alignItems: "center", width: "20px", height: "20px", marginBottom: "0" }} src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />} title="Me" key="sub1">

                        <Menu.Item>SubMenuItem</Menu.Item>
                        <Menu.Item key="14">Option 8</Menu.Item>
                        <Menu.Item key="55">Option 8</Menu.Item>
                        <Menu.Item key="34  ">Option 8</Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>

            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Content
                </div> */}
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ padding: 24 }}>
                    <Col className="gutter-row" span={6} >
                        <div style={{ background: "linear-gradient(to bottom,  #9c9e1f 0%,#9c9e9f 50%,#f6f6f6 50%,#f6f6f6 100%)", borderRadius: "20px" }}>
                            <Image preview={false} height="80px" style={{ borderRadius: "20px", display: "block", padding: "5px", width: "80px", marginLeft: "100px" }} src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
                            <div style={{ textAlign: "center" }}>
                                <a style={{ fontSize: "20px", width: "100%", marginTop: "100px" }}>Huynh Ngoc Hieu</a><br></br>
                                <span style={{ justifyContent: "center" }}>Software Engineer at FPT Software</span>
                                <hr style={{ width: "90%", color: "rgb(199, 191, 188)" }}></hr>
                                <h3>POINT: <strong style={{ color: "red" }}>123456</strong></h3>
                            </div>

                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div style={{ backgroundColor: "white", borderRadius: "10px" }}>
                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                <Image preview={false} height="60px" style={{ borderRadius: "50px", display: "block", padding: "5px", width: "60px" }} src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" />
                                <Input placeholder="Start a post" size="large" style={{ borderRadius: "20px", padding: "10px" }} />

                            </div>
                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "10px" }}>
                                <Button style={{ border: "none" }} icon={<InstagramFilled />}>Photo</Button>
                                <Button style={{ border: "none" }} icon={<YoutubeFilled />}>Video</Button>
                                <Button style={{ border: "none" }} icon={<HomeFilled />}>Event</Button>
                                <Button style={{ border: "none" }} icon={<GiftFilled />}>Write</Button>
                            </div>


                        </div>
                        <hr style={{ width: "90%", color: "rgb(199, 191, 188)", marginTop: "20px", marginBottom: "20px" }}></hr>
                        <Card
                            style={{ borderRadius: "10px" }}
                            // cover={
                            //     <img
                            //         alt="example"
                            //         src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            //     />
                            // }
                            actions={[
                                <LikeOutlined key="like" />,
                                <CommentOutlined key="edit" />,
                                <GiftOutlined key="ellipsis" />,
                            ]}
                        >
                            <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Nguyen Van A"
                                description="Đã đăng lúc 12/04/2021 14:55"
                            />
                            <a>#sdsas</a>
                            <p>Dear cả nhà!!!
                            Hiện tại em đang có CV của một cô bé "xinh xắn, dễ thương" đang open cho cơ hội mới, bé chỉ quan tâm các vị trí internal thôi ạ. Một vài nét tiêu biểu của em ấy như sau:



</p>
                            <p>
                                + Thế mạnh của em ấy là tuyển mass, tạo nguồn, quản lý stakeholders..
</p>
                            <p>+ Chịu khó, chăm chỉ và có trách nhiệm trong công việc.</p>
                            <p>+ Một vài sở trường: nhảy đẹp :)) giao tiếp tốt, có thể làm trainer cũng như tổ chức các events, chương trình EB..</p>
                        </Card>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div style={{ background: '#ffff', borderRadius: "10px", padding:"20px" }}>
                            <h3>People in company</h3>
                            <div style={{display:"grid", justifyContent:"center"}}>
                            <Meta style={{ margin: "20px" }}
                                avatar={<Avatar src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" />}
                                title="Nguyen Van A"
                                description="CEO at Vietcetera"
                                
                            />
                            <Button type="primary" style={{borderRadius:"20px"}}>Send point</Button>
                            </div>
                            
                            
                            <div style={{display:"grid", justifyContent:"center"}}>
                            <Meta style={{ margin: "20px" }}
                                avatar={<Avatar src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" />}
                                title="Nguyen Van A"
                                description="CEO at Vietcetera"
                                
                            />
                            <Button type="primary" style={{borderRadius:"20px"}}>Send point</Button>
                            </div>
                            <div style={{display:"grid", justifyContent:"center"}}>
                            <Meta style={{ margin: "20px" }}
                                avatar={<Avatar src="https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" />}
                                title="Nguyen Van A"
                                description="CEO at Vietcetera"
                                
                            />
                            <Button type="primary" style={{borderRadius:"20px"}}>Send point</Button>
                            </div>
                            <div style={{textAlign:"center", marginTop:"10px"}}><PlusOutlined />  See more </div>
                        </div>
                    </Col>
                </Row>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default Home;