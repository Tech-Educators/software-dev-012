// Here typing props into a component.
export function CoolComponent(props: {
    coolFunction: Function
}) {
    console.log(props.coolFunction(25,25))
    return (
        <h2>Hello</h2>
    )
}