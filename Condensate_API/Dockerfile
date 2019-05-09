FROM microsoft/dotnet:2.2-aspnetcore-runtime

# the publish folder is copied to a folder named bin in the container.
COPY bin/Release/netcoreapp2.2/publish/ app/

ENTRYPOINT ["dotnet", "app/Condensate_API.dll"]