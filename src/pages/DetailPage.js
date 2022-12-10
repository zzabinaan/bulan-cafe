import React from 'react';
import DetailCafe from '../components/DetailCafe';
import { getCafe } from '../utils';
import { useParams } from 'react-router-dom';

function DetailPageWrapper() {
  const { id } = useParams();

  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      cafe: getCafe(props.id),
    };
  }

  render() {
    if (this.state.cafe === undefined) {
      return <p>cafe is not found!</p>;
    }
    return (
      <section className="detail-page">
        <DetailCafe {...this.state.cafe} />
      </section>
    );
  }
}

export default DetailPageWrapper;
