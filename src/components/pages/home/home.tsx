import { CategoryHeader } from '../../category-header/category.header';
import { Filter } from '../../filter/filter';
import { List } from '../../list/list';

export default function HomePage() {
  return (
    <>
      <CategoryHeader />
      <Filter />
      <List />
    </>
  );
}
