import NativeUi from 'lib/nativeui';

const Menu = NativeUi.Menu;
const UIMenuListItem = NativeUi.UIMenuListItem;
const UIMenuCheckboxItem = NativeUi.UIMenuCheckboxItem;
const UIMenuSliderItem = NativeUi.UIMenuSliderItem;
const Point = NativeUi.Point;
const ItemsCollection = NativeUi.ItemsCollection;

mp.gui.cursor.visible = false;
mp.gui.chat.show(false);

const ui = new Menu('Test UI', 'Test UI Subtitle', new Point(50, 50));
ui.AddItem(new UIMenuListItem(
  'List Item',
  'Fugiat pariatur consectetur ex duis magna nostrud et dolor laboris est do pariatur amet sint.',
  new ItemsCollection(['Item 1', 'Item 2', 'Item 3'])
));
ui.AddItem(new UIMenuSliderItem(
  'Slider Item',
  ['Fugiat', 'pariatur', 'consectetur', 'ex', 'duis', 'magna', 'nostrud', 'et', 'dolor', 'laboris'],
  5,
  'Fugiat pariatur consectetur ex duis magna nostrud et dolor laboris est do pariatur amet sint.',
  true
));
ui.AddItem(new UIMenuCheckboxItem(
  'Checkbox Item',
  false,
  'Fugiat pariatur consectetur ex duis magna nostrud et dolor laboris est do pariatur amet sint.'
));

ui.ItemSelect.on((item: { SelectedItem: { DisplayText: any; Data: any }; Text: any; Index: any; IndexToItem: (arg0: number) => void }) => {
  if (item instanceof UIMenuListItem) {
    console.log(item.SelectedItem.DisplayText, item.SelectedItem.Data);
  } else if (item instanceof UIMenuSliderItem) {
    console.log(item.Text, item.Index, item.IndexToItem(item.Index));
  } else {
    console.log(item.Text);
  }
});

// ui.SliderChange.on((item, index, value) => {
// 	console.log(item.Text, index, value);
// });

/*
mp.keys.bind(0x71, false, () => {
  if (ui.Visible) ui.Close();
  else ui.Open();
});
*/
