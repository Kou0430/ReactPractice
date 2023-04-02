import Button from "@/comp/Button";

const Form = () => {
  //arrow function
  return (
    <form method="POST" action="/api/formApi">
      <input type="text" name="name" />
      <input type="submit" value="送信" />
      <Button text={"テスト"} />
    </form>
  );
};

export default Form;
