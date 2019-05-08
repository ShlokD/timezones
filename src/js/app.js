window.addEventListener('load', () => {
  let Controller;
  let data;

  Promise.all([
    import('./classes/controller.js'),
    import('./data/raw.js')
  ]).then(([ControllerModule, rawModule]) => {
    const Controller = ControllerModule.default;
    const raw = rawModule.default;

    const cityFinderButton = document.querySelector("#city-finder");
    const timezoneOffsetInput = document.querySelector("#timezone-offset");
    const container = document.querySelector("#cities");

    const controller = new Controller({
      renderContainer: container,
      buttonElem: cityFinderButton,
      inputElem: timezoneOffsetInput,
      data: raw
    });
    controller.init();

  });
});