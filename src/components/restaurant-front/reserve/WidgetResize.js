import React from 'react';
import useScript from '../../utils/useScript';

export default function WidgetResize(props) {
  return (
    <div>
      {useScript(
        `https://www.opentable.com/widget/reservation/loader?rid=${props.rid}&type=standard&theme=${props.widgetStyle}&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website`
      )}
    </div>
  );
}
