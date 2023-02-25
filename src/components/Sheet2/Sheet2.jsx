import clsx from 'clsx';
import css from './Sheet2.module.css';
import btnCss from '../PhoneBook/ChangePageBtn/ChangePageBtn.module.css';
import ContactList from 'components/PhoneBook/ContactList/ContactList';
import ChnagePageBtn from 'components/PhoneBook/ChangePageBtn/ChangePageBtn';
const sheet2 = ({ page, contacts, nextPage, prevPage }) => {
  console.log(btnCss);
  return (
    <div
      id={page}
      style={{
        zIndex: page - page - page,
      }}
      className={clsx(css.singlePage)}
    >
      <ContactList contacts={contacts} />
      <ChnagePageBtn style={btnCss.btnPrevPage} onClick={prevPage} />
      <ChnagePageBtn style={btnCss.btnNextPage} onClick={nextPage} />
    </div>
  );
};

export default sheet2;