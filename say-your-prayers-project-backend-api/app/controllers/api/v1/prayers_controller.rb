class Api::V1::PrayersController < ApplicationController

  def index
    @prayers = Prayer.all
    render json: @prayers, satus: 200 # you've got a serializer. Maybe you should use it.
  end

  def show
    @prayer = Prayer.find(params[:id])
    render json: @prayer, status: 200
  end

  def create
    @prayer = Prayer.create(prayer_params)
    render json: @prayer, status: 200
  end

  def update
    @prayer = Prayer.find(params[:id])
    @prayer.update(prayer_params)
    render json: @prayer, status: 200
  end

  def destroy
    @prayer = Prayer.find(params[:id])
    @prayer.delete
    render json: {prayerId: prayer.id}
  end


  private
  def prayer_params
    params.require(:prayer).permit(:title, :body, :outcome, :amens)
  end
end
