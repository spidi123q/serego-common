import { useDispatch } from "react-redux";
import GetPlace from "../api/places/GetPlace";
import GetPlaceFromCoordinates from "../api/places/GetPlaceFromCoordinates";
import SearchPlace from "../api/places/SearchPlace";
import { AxiosApi, IResponse } from "../helpers/axios";
import { ReverseGeocodeResponseData } from "@googlemaps/google-maps-services-js/dist/geocode/reversegeocode";
import { PlaceAutocompleteResponseData } from "@googlemaps/google-maps-services-js/dist/places/autocomplete";
import { PlaceDetailsResponseData } from "@googlemaps/google-maps-services-js/dist/places/details";

export function useMapsAPI() {
  const dispatch: any = useDispatch();

  const searchPlace = async (
    search: string,
    token: string
  ): IResponse<PlaceAutocompleteResponseData> => {
    const request = SearchPlace(search, token);
    return dispatch(AxiosApi(request));
  };
  const getPlace = async (
    placeId: string
  ): IResponse<PlaceDetailsResponseData> => {
    const request = GetPlace(placeId);
    return dispatch(AxiosApi(request));
  };
  const getPlaceFromCoordinates = async (
    lat: number,
    lng: number
  ): IResponse<ReverseGeocodeResponseData> => {
    const request = GetPlaceFromCoordinates(lat, lng);
    return dispatch(AxiosApi(request));
  };

  return {
    searchPlace,
    getPlace,
    getPlaceFromCoordinates,
  };
}
