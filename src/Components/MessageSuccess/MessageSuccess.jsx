import * as React from 'react';

const MessageSuccess = () => {
	return (
		Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          }) 
	);
};

export default MessageSuccess;
