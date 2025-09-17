
// Lấy input mật khẩu và div hiển thị strength
document.addEventListener('DOMContentLoaded', function() {
		const passwordInput = document.querySelectorAll('input[type="password"]')[0];
		const strengthDiv = document.getElementById('password-strength');

		passwordInput.addEventListener('input', function() {
			const val = passwordInput.value;
			let strength = 0;
			if (val.length >= 8) strength++;
			if (/[A-Z]/.test(val)) strength++;
			if (/[a-z]/.test(val)) strength++;
			if (/[0-9]/.test(val)) strength++;
			if (/[^A-Za-z0-9]/.test(val)) strength++;

			let msg = '';
			let color = '';
			if (!val) {
				msg = '';
				color = 'red';
			} else if (strength <= 2) {
				msg = 'Mật khẩu yếu';
				color = 'red';
			} else if (strength === 3 || strength === 4) {
				msg = 'Mật khẩu trung bình';
				color = 'orange';
			} else if (strength === 5) {
				msg = 'Mật khẩu mạnh';
				color = 'limegreen';
			}
			strengthDiv.textContent = msg;
			strengthDiv.style.color = color;
		});
});
