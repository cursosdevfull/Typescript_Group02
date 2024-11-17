import { HeaderComponent, Layout, MenuComponent, Subject } from "./observer";

const subject = new Subject();
subject.register(new MenuComponent());
subject.register(new HeaderComponent());

const layout = new Layout(subject);
layout.onChangeStatus(true);
layout.onChangeStatus(false);
