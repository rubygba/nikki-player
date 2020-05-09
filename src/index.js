import React from 'react'

export default class NikkiPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenu: false,
      topState: 0,
      leftState: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
  }

  componentDidMount() {
  }

  rightClick(e) {
    const event = e || window.event
    event.preventDefault()
    // console.log('oncontextMenu:', event)
    if (this.state.isMenu) {
      this.setState({
        isMenu: false
      })
    } else {
      this.setState({
        isMenu: true
      })
    }
  }
  openSrc2Url() {
    const { src, targetUrl } = this.props
    if (targetUrl) {
      window.open(`${targetUrl}?video=${encodeURIComponent(src)}`)
    } else {
      window.open(src)
    }
  }

  render() {
    const { src, autoPlay, controls, width, height, poster, loop, preload, style } = this.props
    const { isMenu, topState, leftState } = this.state
    return (
      <div className="nikki-player" style={style}>
        <video
          src={src}
          autoPlay={autoPlay || true}
          controls={controls || true}
          poster={poster || '#'}
          loop={loop || true}
          preload={preload || 'true'}
          width={width || '100%'}
          height={height || '100%'}
          onContextMenu={(e) => {this.rightClick(e); return false}}>
        </video>
        { isMenu ? 
          (<div className="nikki-player-menu" style={{top: topState, left: leftState}}>
            <ul>
              <li onClick={() => {
                this.openSrc2Url()
              }}>查看视频外链</li>
            </ul>
          </div>) : '' }
      </div>
    )
  }
}