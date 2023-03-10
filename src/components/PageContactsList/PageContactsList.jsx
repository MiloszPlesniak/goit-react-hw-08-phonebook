import clsx from 'clsx';
import css from './PageContactsList.module.css';
import btnCss from '../PhoneBook/ChangePageBtn/ChangePageBtn.module.css';
import ContactList from 'components/PhoneBook/ContactList/ContactList';
import ChnagePageBtn from 'components/PhoneBook/ChangePageBtn/ChangePageBtn';
const PageContactsList = ({ page, contacts, nextPage, prevPage, lastPage }) => {
  return (
    <div
      id={page}
      style={{
        zIndex: 1000 - page,
      }}
      className={clsx(css.singlePage)}
    >
      <ContactList contacts={contacts} />
      {page !== 1 && (
        <ChnagePageBtn style={btnCss.btnPrevPage} onClick={prevPage} />
      )}
      <ChnagePageBtn style={btnCss.btnNextPage} onClick={nextPage} />
    </div>
  );
};

export default PageContactsList;
