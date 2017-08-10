require 'test_helper'

class Frontoffice::HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get frontoffice_home_index_url
    assert_response :success
  end

end
