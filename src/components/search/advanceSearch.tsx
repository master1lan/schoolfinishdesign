import { Button, Card, Col, Form, Input, Row, Select, DatePicker } from "antd";
import { forwardRef } from "react";
import { Link } from "umi";
import style from "./search.module.less";
const { RangePicker } = DatePicker;
export default forwardRef(function AdvanceSearch(
  props: { handlerClose: () => void },
  ref: any
) {
  const { handlerClose } = props;
  return (
    <Card className={style.popover} ref={ref}>
      <Form labelCol={{ span: 6 }}>
        <Row>
          <Col span={12}>
            <Form.Item label='全文检索'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='案件名称'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='法院名称'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='裁判日期'>
              <RangePicker />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='案件号'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='法院层级'>
              <Select
                placeholder='请选择'
                options={[
                  { label: "全部" },
                  { label: "最高法院" },
                  { label: "高级法院" },
                  { label: "中级法院" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='案件类型'>
              <Select
                placeholder='请选择'
                options={[
                  { label: "全部" },
                  { label: "管辖案件" },
                  { label: "刑事案件" },
                  { label: "民事案件" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='当事人'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='法官名称'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='律师'>
              <Input />
            </Form.Item>
          </Col>
          <Col span={24} className={style.advanceSubmitContent}>
            <Button>重置</Button>
            <Link to={`/result`}>
              <Button type='primary' onClick={handlerClose}>
                检索
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </Card>
  );
});
