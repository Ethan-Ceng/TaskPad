import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes
} from "@angular/animations";

export const slideToRight = trigger("routeAnim", [
  state(
    "void",
    style({
      position: "fixed",
      width: "100%",
      height: "100%"
    })
  ),
  state(
    "*",
    style({
      position: "fixed",
      width: "100%",
      height: "80%"
    })
  ),
  transition("void => *", [
    style({transfrom: "tranlateX(-100%)"}),
    animate(".5s ease-in-out", {transfrom: "tranlateX(0)"})
  ]),
  transition("* => void", [
    style({transfrom: "tranlateX(0)"}),
    animate(".5s ease-in-out", {transfrom: "tranlateX(100%)"})
  ])
]);
