const { widget } = figma
const { Frame, Ellipse, Rectangle, useSyncedState, usePropertyMenu, AutoLayout, Text, SVG } = widget

function Widget() {
  const [angle, setAngle] = useSyncedState('angle', 0);
  const [spinning, setSpinning] = useSyncedState("spinning", true);
  const propertyMenu: WidgetPropertyMenuItem[] = [];

  if (spinning == true) {
    propertyMenu.push({
      tooltip: 'Stop',
      propertyName: 'stop',
      itemType: 'action',
    })
  }
  else {
    propertyMenu.push({
      tooltip: 'Start',
      propertyName: 'start',
      itemType: 'action',
    })
  }

  usePropertyMenu(propertyMenu, ({ propertyName }) => {
    if (propertyName === 'start') {
      setSpinning(true);
    } else if (propertyName === 'stop') {
      setAngle(Math.floor(Math.random() * 360));
      setSpinning(false);
    }
  })

  return (
    <AutoLayout
      name="Top"
      overflow="visible"
      spacing={10}
      padding={25}
      width={200}
      height={200}
      horizontalAlignItems="center"
      verticalAlignItems="center"
    >
      <Frame
        name="Spin"
        rotation={angle}
        overflow="visible"
        width={180}
        height={180}
      >
        <Ellipse
          name="BG"
          x={12}
          y={12}
          fill="#EF3124"
          stroke="#000000"
          strokeWidth={2}
          strokeAlign="outside"
          width={156}
          height={156}
        />
        <SVG
          name="Divider"
          x={{
            type: "center",
            offset: 0.005,
          }}
          y={{
            type: "center",
            offset: 0.5,
          }}
          height={159}
          width={139}
          src="<svg width='140' height='159' viewBox='0 0 140 159' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M1.21121 39.7408L1.71121 38.8747L139.535 118.448L139.035 119.314L1.21121 39.7408Z' fill='#000000'/>
<path d='M69.6 0H70.6V159H69.6V0Z' fill='#000000'/>
<path d='M138.415 38.9564L138.915 39.8224L0.974121 119.463L0.474121 118.597L138.415 38.9564Z' fill='#000000'/>
</svg>
"
        />
        <Text
          name="4"
          x={86.16}
          y={63.349}
          fill="#000000"
          width={20}
          height={50}
          rotation={-150}
          verticalAlignText="center"
          horizontalAlignText="center"
          lineHeight={32}
          fontFamily="IBM Plex Sans"
          fontSize={32}
          fontWeight={600}
        >
          4
        </Text>
        <Text
          name="2"
          x={115}
          y={100}
          fill="#000000"
          width={20}
          height={50}
          rotation={90}
          verticalAlignText="center"
          horizontalAlignText="center"
          lineHeight={32}
          fontFamily="IBM Plex Sans"
          fontSize={32}
          fontWeight={600}
        >
          2
        </Text>
        <Text
          name="3"
          x={111.16}
          y={73.349}
          fill="#000000"
          width={20}
          height={50}
          rotation={150}
          verticalAlignText="center"
          horizontalAlignText="center"
          lineHeight={32}
          fontFamily="IBM Plex Sans"
          fontSize={32}
          fontWeight={600}
        >
          3
        </Text>
        <Text
          name="1"
          x={93.84}
          y={116.651}
          fill="#000000"
          width={20}
          height={50}
          rotation={30}
          verticalAlignText="center"
          horizontalAlignText="center"
          lineHeight={32}
          fontFamily="IBM Plex Sans"
          fontSize={32}
          fontWeight={600}
        >
          1
        </Text>
        <Text
          name="5"
          x={65}
          y={80}
          fill="#000000"
          width={20}
          height={50}
          rotation={-90}
          verticalAlignText="center"
          horizontalAlignText="center"
          lineHeight={32}
          fontFamily="IBM Plex Sans"
          fontSize={32}
          fontWeight={600}
        >
          5
        </Text>
        <Text
          name="6"
          x={68.84}
          y={106.651}
          fill="#000000"
          width={20}
          height={50}
          rotation={-30}
          verticalAlignText="center"
          horizontalAlignText="center"
          lineHeight={32}
          fontFamily="IBM Plex Sans"
          fontSize={32}
          fontWeight={600}
        >
          6
        </Text>
      </Frame>
      <Frame
        name="Spinning"
        x={{
          type: "center",
          offset: 0,
        }}
        y={{
          type: "center",
          offset: 0,
        }}
        hidden={!spinning}
        positioning="absolute"
        overflow="visible"
        width={180}
        height={180}
      >
        <Ellipse
          name="BG"
          x={12}
          y={12}
          fill="#E81F11"
          stroke="#000000"
          strokeWidth={2}
          strokeAlign="outside"
          width={156}
          height={156}
        />
        <Ellipse
          name="Shimmer"
          x={90}
          y={182}
          stroke="#000000"
          strokeWidth={2}
          rotation={135}
          width={131.081}
          height={131.081}
          arcData={{
            startingAngle: 1.741,
            endingAngle: 4.138,
            innerRadius: 1,
          }}
        />
        <Ellipse
          name="Shimmer"
          x={136.344}
          y={9.041}
          stroke="#000000"
          strokeWidth={2}
          rotation={-75}
          width={131.081}
          height={131.081}
          arcData={{
            startingAngle: 2.356,
            endingAngle: 3.759,
            innerRadius: 1,
          }}
        />
        <Ellipse
          name="Shimmer"
          x={9.729}
          y={42.968}
          stroke="#000000"
          strokeWidth={2}
          rotation={15}
          width={131.081}
          height={131.081}
          arcData={{
            startingAngle: 2.606,
            endingAngle: 3.302,
            innerRadius: 1,
          }}
        />
        <Ellipse
          name="Shimmer"
          x={17.312}
          y={89.312}
          stroke="#000000"
          strokeWidth={2}
          rotation={45}
          width={102.796}
          height={102.796}
          arcData={{
            startingAngle: 1.741,
            endingAngle: 4.138,
            innerRadius: 1,
          }}
        />
        <Ellipse
          name="Shimmer"
          x={162.688}
          y={89.312}
          stroke="#000000"
          strokeWidth={2}
          rotation={-135}
          width={102.796}
          height={102.796}
          arcData={{
            startingAngle: 1.741,
            endingAngle: 3.465,
            innerRadius: 1,
          }}
        />
        <Text
          name="SPINNING"
          x={63.134}
          y={62.59}
          fill="#000000"
          rotation={-30}
          verticalAlignText="bottom"
          horizontalAlignText="center"
          lineHeight={20}
          fontFamily="IBM Plex Sans"
          fontWeight={500}
        >
          SPINNING
        </Text>
      </Frame>
      <SVG
        name="Pin"
        x={{
          type: "right",
          offset: 8,
        }}
        y={{
          type: "center",
          offset: 0,
        }}
        positioning="absolute"
        height={28}
        width={24}
        src="<svg width='24' height='28' viewBox='0 0 24 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M2.96152 15.7276C1.63851 14.9558 1.63852 13.0442 2.96153 12.2724L14.9768 5.26355C18.9767 2.93025 24 5.81548 24 10.4462L24 17.5538C24 22.1845 18.9767 25.0697 14.9768 22.7365L2.96152 15.7276Z' fill='#000000'/>
</svg>
"
      />
    </AutoLayout>
  );

}

widget.register(Widget)
