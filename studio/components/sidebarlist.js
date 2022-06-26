import S from '@sanity/desk-tool/structure-builder';
import { MdStar } from 'react-icons/md';

function SidebarList() {
  return S.list()
    .title('TechHub-Blog')
    .items([
      S.listItem()
        .title('Feature')
        .id('featureItems')
        .icon(MdStar)
        .child(S.editor().schemaType('feature').documentId('featureItems')),
      ...S.documentTypeListItems().filter((item) => item.getId() !== 'feature'),
    ]);
}

export default SidebarList;
