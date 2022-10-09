import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/auth/auth";
import { useUpdateIsTrainingMutation } from "../../redux/users/usersApi";
import styled from "styled-components";
import { device } from "../../components/device/device";

const Button = styled.button`
  display: block;
  cursor: pointer;
  height: 40px;
  margin: 20px auto;
  padding: 0 20px;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 14px;
  line-height: 1.214;

  color: #ffffff;
  background: #ff6b08;
  border: none;

  &:hover {
    background: #ff9506;
  }
  @media ${device.tablet} and (max-width: 1023px) {
    margin: 0 auto;
  }

  @media ${device.tablet} and (max-width: 1023px) {
    /* width: 200px; */
    margin: 40px auto;
    font-size: 16px;
    line-height: 1.25;
  } ;
`;

export default function FinishTrainingBtn({ clearListBook }) {
  const { _id } = useSelector(selectCurrentUser);
  const [updateIsTraningStatus] = useUpdateIsTrainingMutation();

  const IsTraningStatus = {
    id: _id,
    isTraining: false,
  };

  return (
    <Button
      type="submit"
      onClick={() => {
        clearListBook();
        updateIsTraningStatus(IsTraningStatus);
      }}
    >
      All books are read to complete the training?
    </Button>
  );
}