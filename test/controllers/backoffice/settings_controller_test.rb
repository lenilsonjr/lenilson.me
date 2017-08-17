require 'test_helper'

class Backoffice::SettingsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @setting = settings(:one)
  end

  test "should get index" do
    get settings_url
    assert_response :success
  end

  test "should get new" do
    get new_backoffice_setting_url
    assert_response :success
  end

  test "should create backoffice_setting" do
    assert_difference('Backoffice::Setting.count') do
      post settings_url, params: { backoffice_setting: { key: @setting.key, value: @setting.value } }
    end

    assert_redirected_to backoffice_setting_url(Backoffice::Setting.last)
  end

  test "should show backoffice_setting" do
    get backoffice_setting_url(@setting)
    assert_response :success
  end

  test "should get edit" do
    get edit_backoffice_setting_url(@setting)
    assert_response :success
  end

  test "should update backoffice_setting" do
    patch backoffice_setting_url(@setting), params: { backoffice_setting: { key: @setting.key, value: @setting.value } }
    assert_redirected_to backoffice_setting_url(@setting)
  end

  test "should destroy backoffice_setting" do
    assert_difference('Backoffice::Setting.count', -1) do
      delete backoffice_setting_url(@setting)
    end

    assert_redirected_to settings_url
  end
end
