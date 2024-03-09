import MyComponent from "./MyComponent";

const Template = () => {
    const data = {
        age: 31,
        job: "programmer",
    };

    return (
        <div>
            <h1>Olá {data.job}, tudo bem?</h1>
            <h1>Olá {5 + 5}, tudo bem?</h1>
            <MyComponent/>
        </div>
    );
};
export default Template;