import { Card, Col, Row } from 'antd';
import './ContentLayoutC.css';



export const ContentLayout = ({ title, description}: {title: string, description: string}) => {
    console.log('>>props', title)


    return (
        <>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title={title} bordered={false}>
                            {description}
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
};