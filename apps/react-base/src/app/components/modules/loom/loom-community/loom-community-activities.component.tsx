import React, { Component } from 'react';

const menuOptions = [
  {
    title: 'Projects',
  },
  {
    title: 'Exercises',
  }
]

const projectItems = [
  {
    title: 'Project #1',
    creator: 'User1',
    description: 'Project #1 Description'
  },
  {
    title: 'Project #2',
    creator: 'User1',
    description: 'Project #1 Description'
  },
  {
    title: 'Project #3',
    creator: 'User1',
    description: 'Project #1 Description'
  },
]

const exerciseItems = [
  {
    title: 'Exercise #1',
    creator: 'User1',
    description: 'Exercise #1 Description'
  },
  {
    title: 'Exercise #2',
    creator: 'User1',
    description: 'Exercise #1 Description'
  },
  {
    title: 'Exercise #3',
    creator: 'User1',
    description: 'Exercise #1 Description'
  },
]

export class LoomCommunityActivities extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    }
  }

  selectOption(value: string) {
    this.setState({
      selected: value
    });
  }

  render() {
    const actions = {
      selectOption: this.selectOption.bind(this)
    }
    const { selected } = this.state;
    return (
      <div style={styles.container}>
        {/* <h1>{"{ loom: community/activities }"}</h1> */}
        {/* <p>{selected}</p> */}
        <LoomActivitiesMenu
          options={menuOptions}
          actions={actions} />
        <LoomActivitiesDisplay
          selected={selected} />
      </div>
    );
  }
}

class LoomActivitiesMenu extends Component<any, any> {
  renderMenuOptions(options: any[], onClick: any) {
    if (options && options.length > 0) {
      return options.map((option, index) => {
        return (
          <MenuItem
            key={option.title + index}
            title={option.title}
            onClick={() => onClick(option.title)} />
        );
      });
    }

    return (
      <MenuItem
        title={'No option selected'}
        onClick={() => onClick('')} />
    );
  }

  render() {
    const { options, actions } = this.props;
    return (
      <div style={activitiesStyles.container}>
        { this.renderMenuOptions(options, actions.selectOption) }
      </div>
    );
  }
}

class LoomActivitiesDisplay extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null
    }

    this.setSelectedItem = this.setSelectedItem.bind(this);
  }

  setSelectedItem(value: any) {
    console.log(' setting selected item ', value );
    this.setState({
      selectedItem: value
    });
  }

  renderFrame(dataList: any[], item: any) {
    return (
      <div style={{ display: 'flex', height: '100%', width: '100%', flex: 1 }}>
        <LoomActivitiesList
          data={dataList}
          onClick={this.setSelectedItem} />
        <LoomActivityDetail
          item={item} />
      </div>
    );
  }

  render() {
    const { selected } = this.props;
    const { selectedItem } = this.state;
    switch(selected) {
      case 'Projects':
        return this.renderFrame([], selectedItem);
      case 'Exercises':
        return this.renderFrame(exerciseItems, selectedItem);
      default:
        return this.renderFrame(null, null);
    }
  }
}

class LoomActivityDetail extends Component<any, any> {
  render() {
    const { item } = this.props;
    if (item) {
      const itemKeys = Object.keys(item);
      return (
        <div style={detailStyles.container}>
          { itemKeys ? (
            itemKeys.map((key, index) => {
              return <p key={index + key}>{key} : {item[key]}</p>
            })
          ) : (
            <p>No item keys</p>
          )}
        </div>
      );
    }
    return (
      <div style={detailStyles.container}>
        <p>No item selected</p>
      </div>
    )
  }
}
class LoomActivitiesList extends Component<any, any> {
  renderDataList(dataList: any[], onClick: any) {
    if (dataList && dataList.length > 0) {
      return dataList.map((item, index) => {
        return (
          <MenuItem
            key={item.title + index}
            title={item.title}
            onClick={() => onClick(item)} />
        );
      });
    }
    return <p>No items</p>
  }

  render() {
    const { data, onClick } = this.props;
    return (
      <div style={listStyles.container}>
        { this.renderDataList(data, onClick) }
      </div>
    )
  }
}

const MenuItem = (props) => {
  const { title, onClick } = props;
  return (
    <div style={menuItemStyles.container} onClick={onClick}>
      <p>{title}</p>
    </div>
  );
}

const menuItemStyles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    border: '1px solid black'
  }
}

const listStyles = {
  container: {
    padding: '6px',
    display: 'flex',
    flexFlow: 'column',
    minWidth: '240px',
    width: '240px',
    heigth: '100%',
    border: '1px solid black'
  }
}


const activitiesStyles = {
  container: {
    padding: '6px',
    display: 'flex',
    flexFlow: 'column',
    minWidth: '240px',
    width: '240px',
    heigth: '100%',
  },
}

const detailStyles = {
  container: {
    padding: '6px',
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    width: '100%',
    flex: 1,
    border: '1px solid black'
  }
}

const styles = {
  container: {
    height: '100%',
    display: 'flex',
    // flexFlow: 'column',
    width: '100%'
  },
}
