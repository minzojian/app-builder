import ProForm from '@ant-design/pro-form';

export default function ProFormWrap(props: any) {
  let {initialValues, onFinish, onValuesChange, children, ...rest} = props
  if (typeof initialValues === 'string')
    initialValues = eval(initialValues)
  if (typeof onFinish === 'string')
    onFinish = eval(onFinish)
  if (typeof onValuesChange === 'string')
    onValuesChange = eval(onValuesChange)

  return <ProForm initialValues={initialValues} onFinish={onFinish} onValuesChange={onValuesChange} {...rest}>
    {children}
  </ProForm>
}