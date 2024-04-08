import { IoPersonCircleSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "./Contact.module.css";

export const Contact = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactsList}>
      <div className={css.contact}>
        <IoPersonCircleSharp />
        {name}
      </div>

      <div className={css.contactCard}>
        <p>{number}</p>
        <button
          className={css.delContactBtn}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
