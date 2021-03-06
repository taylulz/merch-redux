import React from 'react';
import PropTypes from 'prop-types';

export default function TicketDetail(props){
  const { ticket, onClickingDelete } = props;
  return (
    <>
      <h1>TICKET DETAIL</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p><em>{ticket.issue}</em></p>
      <button onClick={()=> onClickingDelete(ticket.id)}>Delete Ticket</button>
      <button onClick={props.onClickingEdit}>Edit Ticket</button>
      <hr/>
    </>
  )
}
TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};