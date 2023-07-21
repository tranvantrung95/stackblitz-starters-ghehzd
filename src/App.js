<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Đăng nhập</title>
  <!-- Link CSS từ Bootstrap 5 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+7xWDLjzKk2v2+IuYz2p0Ly6eANl5/ReodXj2hzfrhXyJQ5" crossorigin="anonymous">
</head>
<body>

  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 col-sm-8">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-center">Đăng nhập</h3>
            <form>
              <div class="mb-3">
                <label for="username" class="form-label">Tên đăng nhập</label>
                <input type="text" class="form-control" id="username" name="username" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Mật khẩu</label>
                <input type="password" class="form-control" id="password" name="password" required>
              </div>
              <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="rememberMe">
                <label class="form-check-label" for="rememberMe">Ghi nhớ</label>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary">Đăng nhập</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Link JS từ Bootstrap 5 (nếu cần) -->
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-0Yj0EV3K+6ukzkwovwSdvh4HqIAPhG3vVgnq3bGluCg4GSGFZPIfuG35h5Q94Jg8" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-VoBUhK12CPO8A6/A+MzQFZfXB8qV/4flCe/ToV+OMbsaz+D3/rXn5M0NiHbm6fsr" crossorigin="anonymous"></script>
</body>
</html>
