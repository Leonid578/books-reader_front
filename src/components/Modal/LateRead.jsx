import { Form, Formik } from "formik";
import {
  Backdrop,
  Rating,
  BtnColor,
  Btn,
  ItemBtn,
  Container,
  Svg,
} from "./LateRead.styled";
import Like from "../../images/Vector2.svg";

const ExitModal = ({ showModal, setShowModal }) => {
  return (
    <Backdrop>
      <Container>
        <div>
          <Svg src={Like} alt="like" />
        </div>
        <Rating>
          Well done! but you need to be a little bit faster. You can do it
        </Rating>
        <Formik>
          <Form>
            <ItemBtn>
              <BtnColor type="submit" onClick={() => setShowModal(!showModal)}>
                New training
              </BtnColor>
              <Btn type="button" onClick={() => setShowModal(!showModal)}>
                Back
              </Btn>
            </ItemBtn>
          </Form>
        </Formik>
      </Container>
    </Backdrop>
  );
};

export default ExitModal;
