import { useRef, useState } from "react";
import {
  useGetUsersQuery /*, useLazyGetUserReposQuery */,
} from "../services/user";
import {
  MainDiv,
  InputSearch,
  ButtonSearch,
  SearchDiv,
  DivRadio,
  SortText,
  LabelRadio,
  MessageText,
  PageText,
  ListPage,
  ItemUser,
} from "../styles/components";
import { useNavigate } from "react-router-dom";
import { IUser } from "../models/models";

const COUNT_USERS_PAGE = 20; //количество пользователей на странице

export function Main() {
  const [valueSearch, setValueSearch] = useState("all");
  const input = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [valueRadio, setValueRadio] = useState("desc");
  const [page, setPage] = useState(1);
  const listPages = [];

  const { data, isLoading, isError } = useGetUsersQuery({
    q: valueSearch,
    order: valueRadio,
    per_page: COUNT_USERS_PAGE,
    page: page,
  });

  if (data) {
    //считаем количество доступных страниц
    const countPages = Math.ceil(data.total_count / COUNT_USERS_PAGE);

    if (countPages > 0) {
      // если страниц много, то выводим только 10 соседних с текущей страницей или все 10 если текущая страница - начальная
      if (countPages >= 10) {
        const minPage = page - 5;
        let beginPage = minPage;

        for (let i = 0; i < 10; i++) {
          if (beginPage > 0) {
            listPages[i] = beginPage;
            beginPage++;
          } else {
            listPages[i] = i + 1;
          }
        }
      } else {
        for (let i = 0; i < countPages; i++) {
          listPages[i] = i + 1;
        }
      }
    }
  }
  //изменение порядка сортировки
  function chengeValue(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value) {
      setValueRadio(event.target.value);
    }
  }
  //изменение логина, по которому происходит поиск
  function searchUsers() {
    if (input.current) {
      setValueSearch(input.current.value);
    }
    setPage(1);
  }
  //переход на страничку со списком репозиториев пользователя
  function clickHandler(userName: string) {
    navigate(`/user/${userName}/`);
  }
  //изменение текущей страницы
  function clickPage(pageNumber: number) {
    setPage(pageNumber);
  }

  return (
    <MainDiv>
      <DivRadio>
        <SortText>Сортировать по количеству репозиториев:</SortText>
        <input
          id="ask"
          type="radio"
          name="radio"
          value="desc"
          checked={valueRadio === "desc" ? true : false}
          onChange={chengeValue}
        />
        <LabelRadio>По убыванию</LabelRadio>
        <input
          id="desc"
          type="radio"
          name="radio"
          value="asc"
          checked={valueRadio === "asc" ? true : false}
          onChange={chengeValue}
        />
        <LabelRadio>По возрастанию</LabelRadio>
      </DivRadio>

      <SearchDiv>
        <InputSearch ref={input} type="text" placeholder="Login" />
        <ButtonSearch onClick={searchUsers}>Найти пользователей</ButtonSearch>
      </SearchDiv>
      {isError && <MessageText>Error...</MessageText>}
      {isLoading && <MessageText> Идет загрузка...</MessageText>}
      {data?.total_count === 0 ? (
        <MessageText>Пользователей не найдено...</MessageText>
      ) : (
        <div>
          <ListPage>
            {listPages.map((page: number) => (
              <PageText key={page} onClick={() => clickPage(page)}>
                {" "}
                {page}{" "}
              </PageText>
            ))}
          </ListPage>

          <div>
            {data?.items.map((user: IUser) => (
              <ItemUser key={user.id} onClick={() => clickHandler(user.login)}>
                {user.login}
              </ItemUser>
            ))}
          </div>
        </div>
      )}
    </MainDiv>
  );
}
