import React from 'react'
import BookmarksContext from '../BookmarksContext';

class EditBookmarkForm extends React.Component {
    // static propTypes = {
    //     match: PropTypes.shape({
    //       params: PropTypes.object,
    //     }),
    //     history: PropTypes.shape({
    //       push: PropTypes.func,
    //     }).isRequired,
    //   };

    static contextType = BookmarksContext

    state = {
        error: null,
        id: '',
        title: '',
        url: '',
        description: '',
        rating: 1,
    };
    
    componentDidMount() {
        const { bookmarkId } = this.props.match.params
        fetch(`http://localhost:7000/bookmarks/${bookmarkId}`, {
          method: 'GET',
          headers: {
            //'content-type': 'application/json',
            'authorization': `Bearer b6491f72-707c-460f-bf26-3c0fbedc3987`
          }
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error))
    
            return res.json()
          })
          .then(responseData => {
            this.setState({
              id: responseData.id,
              title: responseData.title,
              url: responseData.url,
              description: responseData.description,
              rating: responseData.rating,
            })
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
      }

    handleTitleUpdate = event => {
        this.setState({
            title: event.target.value
        })
    }

    handleUrlUpdate = event => {
        this.setState({
            url: event.target.value
        })
    }

    handleDescriptionUpdate = event => {
        this.setState({
            description: event.target.value
        })
    }

    handleRatingUpdate = event => {
        this.setState({
            rating: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { bookmarkId } = this.props.match.params
        const { id, title, url, description, rating } = this.state
        //parseInt(id)
        const newBookmark = { id, title, url, description, rating }
        fetch(`http://localhost:7000/bookmarks/${bookmarkId}`, {
          method: 'PATCH',
          body: JSON.stringify(newBookmark),
          headers: {
            'content-type': 'application/json',
            'authorization': `Bearer b6491f72-707c-460f-bf26-3c0fbedc3987`
          },
        })
          .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error))
          })
          .then(() => {
            this.resetFields(newBookmark)
            this.context.updateBookmark(newBookmark)
            this.props.history.push('/')
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
        })
    }

    resetFields = (newFields) => {
        this.setState({
            id: newFields.id || '',
            title: newFields.title || '',
            url: newFields.url || '',
            description: newFields.description || '',
            rating: newFields.rating || '',
        })
    }

    handleClickCancel = () => {
        this.props.history.push('/')
    }

    render() {
        const { title, description, url, rating } = this.state
        //console.log(title, description, url, rating)
        return (
            <section className='EditBookmarkForm'>
                <h2>
                    Edit Bookmark
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='title'>
                        Title
                        </label>
                        <input
                            type='text'
                            name='title'
                            id='title'
                            value={title}
                            onChange={this.handleTitleUpdate}
                            placeholder={title}
                        />
                    </div>
                    <div>
                        <label htmlFor='url'>
                        URL
                        </label>
                        <input
                            type='url'
                            name='url'
                            id='url'
                            value={url}
                            onChange={this.handleUrlUpdate}
                            placeholder={url}
                        />
                    </div>
                    <div>
                        <label htmlFor='description'>
                        Description
                        </label>
                        <textarea
                        name='description'
                        id='description'
                        value={description}
                        onChange={this.handleDescriptionUpdate}
                        />
                    </div>
                    <div>
                        <label htmlFor='rating'>
                        Rating
                        </label>
                        <input
                            type='number'
                            name='rating'
                            id='rating'
                            value={rating}
                            onChange={this.handleRatingUpdate}
                            min='1'
                            max='5'
                        />
                    </div>
                    <div className='AddBookmark__buttons'>
                        <button type='button' onClick={this.handleClickCancel}>
                        Cancel
                        </button>
                        {' '}
                        <button type='submit'>
                        Save
                        </button>
                    </div>
            </form>
            </section>
        )
    }

}

export default EditBookmarkForm